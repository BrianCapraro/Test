const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
// const seed = async () => {
//   await prisma.user.create({
//     data: {
//       username: "foo",
//       password: "bar",
//       tasks: {
//         create: [
//           { description: "task 1" },
//           { description: "task 2" },
//           { description: "task 3" },
//         ],
//       },
//     },
//   });
// };

const seed = async () => {
  for (let i = 1; i <= 25; i++) {
    const randomGPA = Math.floor(Math.random() * 5);
    await prisma.student.create({
      data: {
        firstName: `Firstname ${i}`,
        lastName: `Firstname ${i}`,
        email: `${i}@gmail.com`,
        img: `image.url`,
        gpa: randomGPA,
      },
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
