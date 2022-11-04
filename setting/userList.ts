const userList: userListType = {
    users: ["Yuki@2ld7nn.onmicrosoft.com"],
    nickname: {
        "Yuki@2ld7nn.onmicrosoft.com": '🤝 好事',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

