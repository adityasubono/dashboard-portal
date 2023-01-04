const tokens = {
  admin: "admin-token",
  guest: "guest-token",
  editor: "editor-token",
  superAdmin: "super-admin-token",
  administrator: "administrator-token",
  student: "student-token",
  teacher: "teacher-token",
  staff: "staff-token",
  ceo: "ceo-token",
  advisor: "advisor-token",
  admission: "admission-token",
  corporateSecretary: "corporate-secretary-token",
  parent: "parent-token",
  head: "head-token",
};

const users = {
  "admin-token": {
    id: "admin",
    role: "admin",
    name: "Aji Sujana",
    email: "ajisujana@highscope.com",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
    description: "Admin",
  },
  "editor-token": {
    id: "editor",
    role: "editor",
    name: "Joko Suwarto",
    email: "jokosuwarto@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Editor",
  },
  "guest-token": {
    id: "guest",
    role: "guest",
    name: "Eka Windyasari",
    email: "ekawidyasari@gmail.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Visitor",
  },

  "super-admin-token": {
    id: "super-admin",
    role: "super-admin",
    name: "Aji Saka",
    email: "ajisaka@highscope.com",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
    description: "Super Admin Level Holding",
  },

  "administrator-token": {
    id: "administrator-admin",
    role: "administrator",
    name: "Jaya Suprana",
    email: "jayasuprana@highscope.com",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
    description: "Administrator or admin level unit",
  },

  "ceo-token": {
    id: "admin",
    role: "admin",
    name: "Lisa Qurin",
    email: "lisaqurin@highscope.com",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
    description: "CEO",
  },
  "advisor-token": {
    id: "advisor",
    role: "advisor",
    name: "Damar Sujana",
    email: "damarsujana@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Advisor",
  },
  "corporate-secretary-token": {
    id: "corporate-secretary",
    role: "corporate-secretary",
    name: "Maria Jannah",
    email: "mariajannah@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Corporate Secretary",
  },

  "chief-token": {
    id: "chief",
    role: "chief",
    name: "Ibrahim Surwanto",
    email: "ibrahimsurwarno@highscope.com",
    avatar: "https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",
    description: "Chief",
  },
  "assisted-chief-token": {
    id: "assisted-chief",
    role: "assisted-chief",
    name: "Hari Suhari",
    email: "harisuhari@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Assisted Chief",
  },
  "general-manager-token": {
    id: "general-manager",
    role: "general-manager",
    name: "Harry Miguare",
    email: "harrymiguare@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"General Manager",
  },
  "head-token": {
    id: "head",
    role: "head",
    name: "Queen Harliana",
    email: "queenharliana@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Head",
  },
  "admission-token": {
    id: "staff",
    role: "staff",
    name: "Anita Margaret",
    email: "anitamargaret@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Staff",
  },
  "staff-token": {
    id: "staff",
    role: "staff",
    name: "Julien Putra",
    email: "julienputra@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Staff",
  },
  "student-token": {
    id: "student",
    role: "student",
    name: "Arkan Al Farabi",
    email: "arkanalfarabi@gmail.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Student highscope",
  },
  "teacher-token": {
    id: "teacher",
    role: "teacher",
    name: "Freddy Gumelar",
    email: "freddygumelar@highscope.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Teacher",
  },
  "parent-token": {
    id: "parent",
    role: "parent",
    name: "Mukidi Gultom",
    email: "mukidigultom@gmail.com",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:"Parent",
  },
};

export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    console.log(username)
    if (!token) {
      return {
        status: 1,
        message: "Wrong",
      };
    }
    return {
      status: 0,
      token,
    };
  },
  userInfo: (config) => {
    const token = config.body;
    const userInfo = users[token];
    console.log(token)
    if (!userInfo) {
      return {
        status: 1,
        message: "Success",
      };
    }
    return {
      status: 0,
      userInfo,
    };
  },
  getUsers: () => {
    return {
      status: 0,
      users: Object.values(users),
    };
  },
  deleteUser: (config) => {
    const { id } = JSON.parse(config.body);
    const token = tokens[id];
    if (token) {
      delete tokens[id];
      delete users[token];
    }
    return {
      status: 0,
    };
  },
  editUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    const token = tokens[id];
    if (token) {
      users[token] = { ...users[token], ...data };
    }
    return {
      status: 0,
    };
  },
  ValidatUserID: (config) => {
    const userID = config.body;
    const token = tokens[userID];
    if (token) {
      return {
        status: 1,
      };
    } else {
      return {
        status: 0
      };
    }
  },
  addUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    tokens[id] = `${id}-token`
    users[`${id}-token`] = {
      ...users["guest-token"],
      ...data
    }
    return {
      status: 0,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: "success",
    };
  },
};
