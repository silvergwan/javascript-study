class UserStorage
{
  loginUser(id, password)
  {
    return new Promise((resolve, reject) =>
    {
      setTimeout(() =>
      {
        if ((id === "Lim" && password === "123") ||
        (id === "Sanghyun" && password === "456"))
          resolve(id);  // 변경
        else
          reject(new Error("error"));  // 변경
      }, 2000);
    });
    
  };

  getRoles(user)
  {
    return new Promise((resolve, reject) =>
    {
      setTimeout(() =>
      {
        if (user === "Lim")
          resolve({ name: "Lim", role: "admin" });
        else
          reject(new Error("error"));
      }, 1000);
    });
  };
};

const userStorage = new UserStorage();
const id = prompt('아이디를 입력해 주세요: ');
const password = prompt('비밀번호를 입력해 주세요: ');

userStorage  // 변경
  .loginUser(id, password);
  .then(user => userStorage.getRoles(user));
  .then(user => alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`));
  .catch(console.log);