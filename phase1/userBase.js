class UserBase {
  constructor(users){
    this.users = users
  };

  getNames(){
    const names = []
    for (let i=0;i<this.count();i++)
    {
      names.push (this.users[i].getName())
    }
    return names;

  }

  getIntroductions(){
    const introductions = []
    for (let i=0;i<this.count();i++)
    {
      introductions.push (this.users[i].getIntroduction())
    }
    return introductions;

  }

  count(){
    return this.users.length;
  }
};

module.exports = UserBase