// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "@/services/firebase"
import { ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

  const uuid = v4()
  set(ref(db, 'disciplinas/' + uuid), req.body)
  
}
