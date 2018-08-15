import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 1, firstName: 'Ratko', lastName: 'Korlevski', email: 'ratko_korle@hotmail.com', password: '123456'}
    ];
    const posts = [
      {id: 1, title: 'Lay Low', author: 'Ratko Korlevski', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 2, title: 'Responsive Design Tips', author: 'Ratko Korlevski', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 3, title: 'Focus', author: 'Viktorija Dodova', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 4, title: 'Plan your Time', author: 'Deni Popovski', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 5, title: 'Why so serious?', author: 'Ratko Korlevski', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 6, title: 'Get Going', author: 'Viktorija Dodova', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 7, title: 'Land of promises', author: 'Leo Leo Tip', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 8, title: 'Learn to learn', author: 'Tup Tip Teo', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 9, title: 'Bee Model', author: 'Ratko Korlevski', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 10, title: 'Eat Healthy Food', author: 'Viktorija Dodova', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 11, title: 'Trouble Double', author: 'Ratko Korlevski', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      ];
    return {users, posts};
  }
  getToken(user) {
    return 'this is a token';
  }

  get (reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'posts') {
      return this.getArticles(reqInfo);
    } else {
      return undefined;
    }
  }

  getArticles(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      const collection = reqInfo.collection;
      const id = reqInfo.id;
      const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);

      const options: ResponseOptions = data ?
        {
          body: dataEncapsulation ? { data } : data,
          status: 200
        } :
        {
          body: { error: `'Post not found` },
          status: 404
        };

      options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
      options.headers = reqInfo.headers;
      options.url = reqInfo.url;
      return options;
    });
  }

  post(reqInfo: RequestInfo) {

    if (reqInfo.id === 'login') {
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(user => {
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password ;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
          {
            body: dataEncapsulation ? { responseBody } : responseBody,
            status: 200
          } :
          {
            body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
            status: 404
          };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;
      });


    } else if (reqInfo.id === 'signup') {
      reqInfo.id = null;
      console.log(' from signup');
    }
  }
}
