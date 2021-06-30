function UserService() {
  this.getListUserApi = function () {
    return axios({
      url: "https://60bc9ad9b8ab37001759f4e4.mockapi.io/api/users",
      method: "GET",
    });
  };
  this.addUserApi = function (user) {
    return axios({
      url: "https://60bc9ad9b8ab37001759f4e4.mockapi.io/api/users",
      method: "POST",
      data: user,
    });
  };
  this.deleteUserApi = function (id) {
    return axios({
      url: `https://60bc9ad9b8ab37001759f4e4.mockapi.io/api/users/${id}`,
      method: "DELETE",
    });
  };
  this.getUserByIdApi = function (id) {
    return axios({
      url: `https://60bc9ad9b8ab37001759f4e4.mockapi.io/api/users/${id}`,
      method: "GET",
    });
  };
  this.updateUserApi = function (user) {
    return axios({
      url: `https://60bc9ad9b8ab37001759f4e4.mockapi.io/api/users/${user.id}`,
      method: "PUT",
      data: user,
    });
  };
}
