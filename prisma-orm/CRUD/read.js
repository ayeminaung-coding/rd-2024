const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/*findMany */
prisma.user.findMany().then((data) => {
    console.log(data);
})

//async
  async function read() {
  const data = await prisma.user.findMany();
  console.log(data);
}
// read(); 

/* findfirst */
prisma.user
  .findFirst({
    where: { id: 1 },
    include: { posts: true },
  })
  .then((data) => console.log(data))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

//async
async function readFirst() {
    const data = await prisma.user.findFirst({where: {id: 1}, include: {posts: true}});
    console.log(data);
}
// readFirst();


