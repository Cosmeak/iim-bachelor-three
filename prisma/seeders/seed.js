const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const words = [
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  },
  {
    civile: '',
    impostor: ''
  }
]

const main = async () => {
  console.log('Start seeding...')
  for (const word of words) {
    await prisma.words.create({
      data: word
    })
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect
    process.exit(1)
  })
