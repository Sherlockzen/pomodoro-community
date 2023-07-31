'use client'

import { RealtimeChannel, createClient } from "@supabase/supabase-js";
import { create } from "domain";
import { useEffect, useState } from "react";

const urlSupa = 'https://zorhzdwiwbmhswrfekdo.supabase.co';
const keySupa = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvcmh6ZHdpd2JtaHN3cmZla2RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3Mzc2ODMsImV4cCI6MjAwNjMxMzY4M30.rOodWLqoZa_U9MLYjWqsBfOOMIUc2pbg_7Rs3-zRtXQ'

const clientA = createClient(
  urlSupa,
  keySupa,
)
const channelA = clientA.channel('room-1', {
  config: {
    broadcast: {
      self: true,
    },
  },
})


channelA.on(
  'broadcast',
  { event: 'test' },
  (payload) => console.log(payload)
)
  .subscribe()


const Room = () => {

  const teste = (user: string, msg: string) => {
    channelA.send({
      type: 'broadcast',
      event: 'test',
      payload: {
        autor: user,
        message: msg,
      },
    })
  }

  return (
    <>
      <div className=" bg-emerald-600">You are in the ROOM</div>
      <button className=" btn outline-black">Send message!</button>
    </>
  )
}

export default Room;