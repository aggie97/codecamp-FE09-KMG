const fruits = ["사과", "바나나", "파인애플"];

const newFruits = [];

newFruits.push(fruits[fruits.length - 1]);

const Obj = {
  name: "철수",
  age: 12,
  school: {
    name: "다람쥐 초등학교",
  },
  friends: ["영희", "훈이"],
};

delete Obj.friends;

const student = {
  name: "철수",
};

const student1 = {};

student1.name = "철수";

const student2 = {};

student2["name"] = "철수";

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student.school = school;
