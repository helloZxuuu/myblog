# Git操作

## 配置git

- 配置用户名和邮箱

  ```bash
  $ git config --global user.name "<您的用户名>"
  $ git config --global user.email "<您的邮箱>"
  ```

  注意：

  - 用户名可以由字母、数字、常用符号组成﹔

  - 邮箱请按照标准邮箱格式填写﹔

  - git config 命命的-global参数﹐表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址;

  - 使用`git config -l`查看配置
  
    

## SSH密钥生成

- git bash命令行输入

  ```bash
  $ ssh-keygen -t rsa -C"<您的邮箱>"
  ```

  然后输入3个回车( Enter键）即可，生成的SSH秘钥对默认保存在"~/.ssh/id_rsa/id_rsa.pub"。

  

## 创建仓库

- 该文件夹转换成Git可以管理的仓库

  ```bash
  $ git init
  ```

  执行该命命后，Git仓库就创建好了，并且是一个空的仓库( empty Git repository )。在原先的空文件夹下多了一个.git文件夹，这个文件夹是Git用来跟踪管理版本库的。

## 提交修改到本地git仓库

- 查看仓库状态

  ```bash
  $ git status
  ```

  ![image-20210627135010917](./Images\image-20210627135010917.png)

  **Untracked files**表示还**没有**被Git跟踪的文件。

  

- 将文件添加到暂存区

  ```bash
  $ git add <files>
  ```

  此时再次使用`git status`命令将会出现**Changes to be committed**，表示待提交到Git仓库的修改。

- 提交文件到git仓库

  ```bash
  $ git commit -m "本次提交的说明，可以方便以后查找记录"
  ```

## 查看历史提交记录

- 当提交次数达到一定数量，我们很难记得每次提交都修改了什么内容。使用git log命今可以查看历史提交记录，如果需要查看指定文件提交记录，可以在命合后接指定文件名称查看。

  ```bash
  $ git log
  $ git log --pretty=oneline
  ```

  `git log`有许多附加选项，如`--pretty=oneline`表示一行显示一条历史记录。

## 创建分支

- **分支**是Git的一个重要特性﹐使用分支意味着你可以把你的工作从主线上**分离**开来﹐转移到分支进行开发，**以免影响主线开发**。

- 使用`git branch` 命今创建分支，下面我们创建一个名为`feature`的分支，并在上面新增一些功能。

  ```bash
  $ git branch feature #创建frature分支
  ```

  ```bash
  $ git switch frature #切换到feature分支,命合行界面最右侧显示了当前工作分支
  ```

## 合并分支

- 在feature 分支完成功能开发后﹐将分支合并到主线( master )分支。

  ```bash
  $ git switch master #切换回master分支
  
  $ git merge feature #合并feature分支
  ```

## 解决冲突

- 冲突是合并分支时有可能遇到的情况。当合入分支和被合入分支同时对某一文件进行了修改,合并这两个分支时，就有可能会产生冲突而导致无法合并，这时就需要解决冲突。

- 还是以feature 分支和master分支为例。

  1. feature分支

  ```bash
  $ git switch feature
  $ echo "This is feature branch." >> helloworld.md #向helloworld.md文件写入内容
  $ git add helloworld.md
  $ git commit -m "Modify helloworld.md in feature branch."
  ```
  2. master分支
  ```bash
  $ git switch master
  $ echo "This is master branch." >>helloworld.mdgit add helloworld.md
  $ git commit -m "Modify helloworld.md in master branch."
  ```
  3. master分支合并feature分支
  ```bash
  $ git merge feature
  Auto-merging helloworld.md
  CONFLICT(content): Merge conflict in helloworld.md
  Automatic merge failed; fix conflicts and then commit the result.
  #CONFLICT字段表示合并分支时产生冲突﹐这时在命合行最右侧会显示有MERGING字段。
  ```
  4. 解决冲突

     使用`git status`查看冲突文件

     ```bash
     $ git status
     On branch master
     You have unmerged paths.
     	(fix conflicts and run "git commit")
     	(use "git merge --abort" to abort the merge)
     Unmerged paths:
     	(use "git add <file>..." to mark resolution)
     		both modified: helloworld.md
     no changes added to commit (use "git add" and/or "git commit -a")
     ```

     上面表明helloworld.md文件产生了冲突，两个分支都对该文件进行了修改。需要手动进行修改以解决冲突。使用下面的命合打开冲突的文件。

     ```bash
     $ vim helloworld.md
     #打开helloworld.md文件
     hello world !
     <<<<<<< HEAD
     This is master branch.
     =======
     This is feature branch.>>>>>>> feature
     ```

     <<<<<<<HEAD和\=\=\=\=\=\=\=之间的是master分支的修改，\=\=\=\==\=\=和>>>>>>> feature之间是feature分支的修改。现在将文件内容手动修改成期望的内容﹐本实验中将其修改为如下内容∶

     ```bash
     hello world !
     This is master branch.
     ```

     文件内容修改后﹐需要使用`git add`将该文件**重新**添加到暂存区，表示文件冲突已解决。

     然后输入`git commit`，在弹出的窗口中输入:q，即可将因冲突而失败的合入重新操作完成。

     使用`git log`带`—graph`选项的命合，可以输出**点线图**清楚地看到分支合并过程。

     ```bash
     $ git log --pretty=oneline --graph
     *5719cfe6dcc9ea7588a98oabzbcbb95af45efze5(HEAD -> master) Merge branch 'feature'
     |\
     | *c7687eea3e5730e47o62e32abe17e3c84e928acc(feature)Modify helloworld.md in feature branch.
     * |85dgeb8oof2dof8ada4f279142efoe512of2148 Modify helloworld.md in master branch.
     ```

## 拓展

- 假设远程仓库存在develop分支

  ```bash
  $ git checkout -b develop origin/develop		#本地创建develop分支并跟踪远程分支origin/develop
  
  $ git checkout -b featureA						#以develop 分支为基础创建featureA分支
  
  $ git push -u origin featureA					#将featureA分支推送到远程仓库
  ```

- 为了保持Git仓库分支结构的清晰,你将featureA分支删除。

  ```bash
  $ git switch develop				#在删除本地仓库featureA分支前，选切换到其他分支
  $ git branch -d featureA			#删除本地仓库featureA分支
  $ git push origin -d featureA		#删除远程仓库featureA分支
  ```

- 查看分支

  ```bash
  $ git branch
  ```

- 现在develop分支已经合入了不少功能﹐团队准备让你进行一次版本发布。你先在本地更新develop分支，然后以此为基础创建release-v1分支，并推送到远程仓库﹐方便团队成员协作进行一些发布的工作。

  ```bash
  $ git switch develop				#切换到develop分支
  $ git pull							#更新develop 分支
  $ git branch release-v1				#以develop 分支为基础创建release-v1分支
  $ git switch release-v1				#切换到release-v1分支
  $ git push -u origin release-v1		#将release-v1分支推送到远程仓库
  ```

- 在release-v1分支完成发布准备后，将其合并到master分支和develop分支，并为master打上版本标签，最后删除release-v1分支保持分支结构清晰。

## 问题

```shell
$ git pull
fatal: refusing to merge unrelated histories
```

解决

```shell
$ git pull origin master --allow-unrelated-histories
```

