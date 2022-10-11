const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/**
 * Create a user with a pseudo and the game id
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  // find the game
  const game = await prisma.games.findUnique({
    where: {
      status: 1
    }
  })

  // Create the new user who register his pseudo
  const user = await prisma.users.create({
    gameId: game.id,
    pseudo: req.body.pseudo,
    status: 1
  })

  // Response with the new user create
  res.status(200).json({
    data: user
  })
}
