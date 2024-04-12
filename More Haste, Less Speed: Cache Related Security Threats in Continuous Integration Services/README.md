# More Haste, Less Speed: Cache Related Security Threats in Continuous Integration Services





这篇paper是发表在**IEEE S&P 2024**的一篇文章，题目为《欲速则不达：持续集成服务中与缓存相关的安全威胁》，主要就是研究之前很少有人接触的方面：关于CI缓存机制的安全问题。



## 缓存泄漏攻击

指的是CIP在执行job的时候使用的一些特定命令会将敏感数据写入到文件中，而CIP的存储配置文件可能将这些敏感文件同样缓存了下来，导致了缓存泄漏攻击。例如`docker login`会将登陆的凭据写入到`∼/.docker/config.json`



| Tools  | Commands                                                     | Generated Sensitive Files                          | Sensitive Data                                               |
| ------ | ------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ |
| docker | `$ docker login`<br />`$ docker trust key load`              | ∼/.docker/config.json∼/.docker/trust/private/*.key | Docker registry login credentials.Private key for signing/verifying Docker images. |
| npm    | `$ npm login`                                                | ∼/.npmrc                                           | npm registry login credentials.                              |
| aws    | `$ aws configure set aws_secret_access_key`<br />`$ aws configure set aws_access_key_id` | ∼/.aws/credentials∼/.aws/credentials               | AWS services access key secret. AWS services access key id.  |
| npx    | `$ npx vercel −−token`                                       | ∼/.npm/_logs/*.log                                 | Vercel services access credentials.                          |
| poetry | `$ poetry config http-basic.pypi __token__`                  | ∼/.config/pypoetry/auth.toml                       | PyPI registry login credentials.                             |

细分可以分为3种攻击：

1. 易受攻击的自定义缓存规则。即自定义的有风险的缓存规则，将敏感文件缓存。
2. 存在漏洞的官方缓存模板。即官方的缓存模版将敏感文件缓存。
3. 易受攻击的第三方缓存插件。第三方的缓存插件将敏感文件缓存。

## 缓存权限提升攻击

即高权限Tcache的泄漏。以TravisCI举例：

TravisCI使用AWS S3预签名URL作为Tcache，任何获得预签名URL的人都可以临时访问S3中的特定文件。同时，TravisCI采用了三级缓存继承策略处理来自分叉仓库的拉取请求。它将按顺序检查缓存：(1) 拉取请求缓存，(2) 拉取请求目标分支缓存（在父仓库中），以及 (3) 父仓库默认分支缓存。

从一个分叉仓库触发的CI任务总是会生成上述可能缓存对应所有三个预签名URLs。此外，这些预签名URLs将被传递给CI运行器然后写入到运行主机机上一个文件中（即`∼/.casher/bin/casher`）。运行器按顺序检查缓存在本地主机恢复第一个可下载的缓存。然而，通过在CI配置文件或用于CI任务代码基础内添加代码（例如单元测试代码），然后从分叉仓库启动拉取请求, 攻击者可以轻松访问该文件、获取这三个预签名URL，并进一步非法操作（例如读和/或写）父仓名录默认和目标分支缓存。

## 缓存污染攻击

大致分为三类

1. 跨Repository的缓存污染。如TeamCity and Jenkins基于主机隔离缓存，因此各个Repository同享缓存。
2. 跨branch的缓存污染。除 GitHub Actions 外，其他六种 CIP 都允许同一版本库的不同分支共享缓存。攻击者可以在未受保护的分支启动CI任务进行缓存污染，使得受保护的分支使用受污染的缓存。
3. 跨job的缓存污染。GitHub Actions 和 GitLab CI 可以向同一分支的不同作业授予不同级别的权限。因此可以让低权限的job的CI进行缓存污染，污染高权限job的缓存。

## 缓存后门攻击

即一个仓库的协作者被解雇后，他的缓存对象没有被删除仍然被使用。因此一个恶意的协作者可以在被解雇前注入恶意的缓存对象。

后门攻击根据类型可以分为合作者移除、Git 标签创建和代码库转移。

