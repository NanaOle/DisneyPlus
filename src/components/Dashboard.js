import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import '../dashboard.css'
import { auth, db } from '../firebase'
import {
  query,
  collection,
  getDocs,
  where,
  onSnapshot,
} from 'firebase/firestore'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Recomended from './Recomended'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'

//

function Dashboard() {
  //
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')

  // for recommend
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const [data5, setData5] = useState([])
  const [data6, setData6] = useState([])
  // recommend ends

  // for new
  const [dataa, setDataa] = useState([])
  const [data1a, setData1a] = useState([])
  const [data2a, setData2a] = useState([])
  const [data3a, setData3a] = useState([])
  const [data4a, setData4a] = useState([])
  const [data5a, setData5a] = useState([])
  const [data6a, setData6a] = useState([])
  // new ends

  // for originals
  const [datab, setDatab] = useState([])
  const [data1b, setData1b] = useState([])
  const [data2b, setData2b] = useState([])
  const [data3b, setData3b] = useState([])
  const [data4b, setData4b] = useState([])
  const [data5b, setData5b] = useState([])
  const [data6b, setData6b] = useState([])
  // originals ends

  // for trending
  const [datac, setDatac] = useState([])
  const [data1c, setData1c] = useState([])
  const [data2c, setData2c] = useState([])
  const [data3c, setData3c] = useState([])
  const [data4c, setData4c] = useState([])
  const [data5c, setData5c] = useState([])
  const [data6c, setData6c] = useState([])
  //trending ends

  const navigate = useNavigate()
  //

  // collection ref, name of the  collection
  const colref = collection(db, 'movies')

  //console.log(colref)
  // console.log(colref)

  //
  const fetchUserName = async () => {
    //
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      console.error(err)
      // alert('An error occured while fetching user data')
    }
  }

  // one
  const getMovies = async () => {
    const q = query(colref, where('type', '==', 'recommend'))
    // get collection data
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let backgroundImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          backgroundImg: doc.data().backgroundImg,

          //
        }))

        let cardImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          cardImg: doc.data().cardImg,

          //
        }))
        let description = snapshot.docs.map((doc) => ({
          id: doc.id,
          description: doc.data().description,

          //
        }))
        let subTitle = snapshot.docs.map((doc) => ({
          id: doc.id,
          subTitle: doc.data().subTitle,

          //
        }))
        let title = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,

          //
        }))
        let titleImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          titleImg: doc.data().titleImg,

          //
        }))
        let type = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: doc.data().type,

          //
        }))
        setData(backgroundImg)
        setData1(cardImg)
        setData2(description)
        setData3(subTitle)
        setData4(title)
        setData5(titleImg)
        setData6(type)
      },
      (err) => {
        console.log(err.message)
      },
    )
    return unsub
  }
  // one

  // two
  const getMovies2 = async () => {
    const q = query(colref, where('type', '==', 'new'))
    // get collection data
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let backgroundImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          backgroundImg: doc.data().backgroundImg,

          //
        }))

        let cardImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          cardImg: doc.data().cardImg,

          //
        }))
        let description = snapshot.docs.map((doc) => ({
          id: doc.id,
          description: doc.data().description,

          //
        }))
        let subTitle = snapshot.docs.map((doc) => ({
          id: doc.id,
          subTitle: doc.data().subTitle,

          //
        }))
        let title = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,

          //
        }))
        let titleImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          titleImg: doc.data().titleImg,

          //
        }))
        let type = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: doc.data().type,

          //
        }))
        setDataa(backgroundImg)
        setData1a(cardImg)
        setData2a(description)
        setData3a(subTitle)
        setData4a(title)
        setData5a(titleImg)
        setData6a(type)
      },
      (err) => {
        console.log(err.message)
      },
    )
    return unsub
  }
  // two

  // three

  const getMovies3 = async () => {
    const q = query(colref, where('type', '==', 'original'))
    // get collection data
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let backgroundImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          backgroundImg: doc.data().backgroundImg,

          //
        }))

        let cardImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          cardImg: doc.data().cardImg,

          //
        }))
        let description = snapshot.docs.map((doc) => ({
          id: doc.id,
          description: doc.data().description,

          //
        }))
        let subTitle = snapshot.docs.map((doc) => ({
          id: doc.id,
          subTitle: doc.data().subTitle,

          //
        }))
        let title = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,

          //
        }))
        let titleImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          titleImg: doc.data().titleImg,

          //
        }))
        let type = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: doc.data().type,

          //
        }))
        setDatab(backgroundImg)
        setData1b(cardImg)
        setData2b(description)
        setData3b(subTitle)
        setData4b(title)
        setData5b(titleImg)
        setData6b(type)
      },
      (err) => {
        console.log(err.message)
      },
    )
    return unsub
  }
  //three

  //four
  const getMovies4 = async () => {
    const q = query(colref, where('type', '==', 'trending'))
    // get collection data
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let backgroundImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          backgroundImg: doc.data().backgroundImg,

          //
        }))

        let cardImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          cardImg: doc.data().cardImg,

          //
        }))
        let description = snapshot.docs.map((doc) => ({
          id: doc.id,
          description: doc.data().description,

          //
        }))
        let subTitle = snapshot.docs.map((doc) => ({
          id: doc.id,
          subTitle: doc.data().subTitle,

          //
        }))
        let title = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,

          //
        }))
        let titleImg = snapshot.docs.map((doc) => ({
          id: doc.id,
          titleImg: doc.data().titleImg,

          //
        }))
        let type = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: doc.data().type,

          //
        }))
        setDatac(backgroundImg)
        setData1c(cardImg)
        setData2c(description)
        setData3c(subTitle)
        setData4c(title)
        setData5c(titleImg)
        setData6c(type)
      },
      (err) => {
        console.log(err.message)
      },
    )
    return unsub
  }

  //four

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
    fetchUserName()
    getMovies()
    getMovies2()
    getMovies3()
    getMovies4()
    //

    //
  }, [user, loading])

  // console.log('data', data)
  // console.log('name', name)

  //
  return (
    <Container className="container">
      <ImageSlider />
      <Viewers />
      <Recomended data1={data1} />
      <NewDisney data1a={data1a} />
      <Originals data1b={data1b} />
      <Trending data1c={data1c} />
    </Container>
  )
}
const Container = styled.main`
  min-height: calc(100vh - 250px);
  height: 100%;
  overflow-x: hidden;
  display: block;
  margin-top: 50px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: url('/images/home-background.png') center center / cover no-repeat
    fixed;
  position: absolute;
  opacity: 1;
  z-index: -1;
`

export default Dashboard
