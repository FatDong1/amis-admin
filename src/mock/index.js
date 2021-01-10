// 通过axios-mock-adapter生成代理api地址
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

function wait(duration) {
    return new Promise((resovle) => {
        setTimeout(resovle, duration);
    });
}

export default {
  init() {
    const mock = new MockAdapter(axios);

    mock.onAny('/api/login')
        .reply(200, {
            status: 0,
            msg: '登录成功'
        });

    mock.onAny('/api/form/save')
        .reply(async () => {
            await wait(2000);

            return [200, {
                status: 0,
                msg: '保存成功'
            }];
        });


    mock.onAny('/api/saveWizard')
        .reply(async () => {
            await wait(2000);

            return [200, {
                status: 0,
                msg: '保存成功'
            }];
        });

    mock.onAny('/api/customer?page=1&perPage=10')
        .reply(async () => {
            await wait(2000);
            return [200, {
                status: 0,
                data: {
                    count: 3,
                    items: [
                        {
                            id: 1,
                            name: '张珊',
                            age: 18,
                            tel: '13111011101',
                            gender: 0,
                            company: 'XX XX XX'
                        },
            
                        {
                            id: 2,
                            name: '李思',
                            age: 18,
                            tel: '13111011101',
                            gender: 1,
                            company: 'XX XX XX'
                        },
                        {
                            id: 3,
                            name: '王武',
                            age: 18,
                            tel: '13111011101',
                            gender: 1,
                            company: 'XX XX XX'
                        }
                    ]
                }
            }];
        });
  }
}