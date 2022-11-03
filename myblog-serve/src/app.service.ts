import { Injectable } from '@nestjs/common';
const Mock = require('mockjs')

@Injectable()
export class AppService {
  getHello(): Record<string, any> {
    return {
      title: '九日笔记',
      techStack: 'JS,TS,React',
      desc: '熟悉 React 技术栈，并拥有其实习开发经历；具备良好的编程习惯，富有自驱力，每天坚持 2 小时左右代码学习，具备良好的前端技术知识广度；能够高效地进行团队沟通和协作开发。',
      email: '13453064@qq.com',
      github: 'https://github.com/helloZxuuu?tab=repositories',
      gitee: 'https://gitee.com/HelloWorld_zx/dashboard/projects',
      yuque: 'https://www.yuque.com/zhumingxu-ewty7/bbytxs',
      csdn: 'https://blog.csdn.net/catchmypow?spm=1000.2115.3001.5343'
    };
  }

  getHomeBlogList(): any {
    const res =  Mock.mock({
      "data|7": [
        {
          id: "@id",
          author: "@cname",
          createTime: "@date",
          companyName: "@cword(4, 10)",
          contentType: "前端",
          title: "@ctitle",
          content: "@csentence(40, 100)",
          look: "@natural(1, 30000)",
          good: "@natural(1, 3000)",
          comment: "@natural(1, 300)"
        }
      ]
    })
    return res.data
  }
}
