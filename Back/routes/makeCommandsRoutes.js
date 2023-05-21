import CommandModel from "../db/models/CommandModel.js"
import { spawn } from "child_process"

const makeCommandRoutes = ({ app }) => {
  app.post("/command", async (req, res) => {
    const { command, scanoption, opt, numopt, address } = req.body
    const nmaparg = [command, scanoption, opt, numopt, address]
    const ls = spawn("nmap", nmaparg)
    let out = ""
    ls.stdout.on("data", (data) => {
      out += data.toString()
    })
    ls.on("close", async (code) => {
      if (code === 0) {
        const commandForm = new CommandModel({
          command: command,
          address: address,
          scanoption: scanoption,
          opt: opt,
          numopt: numopt,
          date: Date.now(),
          result: out,
        })
        await commandForm
          .save()
          .then(() => {
            res.status(200).send("Formulaire sauvegardé avec succès")
          })
          .catch((error) => {
            console.error(error)
            res.status(500).send("Erreur lors de la sauvegarde du formulaire")
          })
      }
    })
  })

  app.get("/commands", async (req, res) => {
    await CommandModel.find()
      .then((forms) => {
        res.status(200).json(forms)
      })
      .catch((error) => {
        console.error(error)
        res.status(500).send("Erreur lors de la récupération des formulaires")
      })
  })

  app.get("/lastcommand", async (req, res) => {
    await CommandModel.findOne()
      .sort({ date: -1 })
      .then((forms) => {
        res.status(200).json(forms)
      })
      .catch((error) => {
        console.error(error)
        res.status(500).send("Erreur lors de la récupération des formulaires")
      })
  })

  app.delete("/command/:commandId", async (req, res) => {
    const commandId = req.params.commandId

    await CommandModel.findByIdAndDelete(commandId)
      .then(() => {
        res.status(200).send("Formulaire supprimé avec succès")
      })
      .catch((error) => {
        console.error(error)
        res.status(500).send("Erreur lors de la suppression du formulaire")
      })
  })
}

export default makeCommandRoutes
