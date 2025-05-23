import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import FormAdd from './FormAdd';
import SingleCategory from './SingleCategory';
import useScreen from '@/hook/useScreen';

function Gallery( {setMedia, medias}) {
  const [showForm, setShowForm] = useState(false)
  const handleShowForm = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)
  const [currIndx, setCurrIndx] = useState(undefined)
  const large = useScreen()
  const med = [...medias]
  const plansMed = med.filter(elt => elt.category === 'Plans')
  const placoMed = med.filter(elt => elt.category === 'Placoplâtre')
  const decoMed = med.filter(elt => elt.category === 'Decoration')
  const peintureMed = med.filter(elt => elt.category === 'Peinture')
  const singleCategoryRef = useRef(new Map())
    const handleFull = (indx) => {
      const arr = [0, 1, 2, 3] 
      const arrf= arr.filter(elt => elt !== indx)
      const node1 = singleCategoryRef.current.get(arrf[0])
      const node2 = singleCategoryRef.current.get(arrf[1])
      const node3 = singleCategoryRef.current.get(arrf[2])
      const node = singleCategoryRef.current.get(indx)
      node1.scrollTo({top:0, behavior:'smooth'})
      node1.style.height=large?'525px':'370px'
      node1.style.overflow='hidden'
      node2.scrollTo({top:0, behavior:'smooth'})
      node2.style.height=large?'525px':'370px'
      node2.style.overflow='hidden'
      node3.scrollTo({top:0, behavior:'smooth'})
      node3.style.height=large?'525px':'370px'
      node3.style.overflow='hidden'
      node.style.overflow='scroll'
      node.scrollTo({top:10000, behavior:'smooth'})
      setCurrIndx(indx)
    }
    const handleShowLess = (indx) => {
      const node = singleCategoryRef.current.get(indx)
        node.scrollTo({top:0, behavior:'smooth'})
        node.style.height=large?'525px':'370px'
        node.style.overflow='hidden'
        setCurrIndx(undefined)
    }
  if(showForm) return <FormAdd setMedias={setMedia} medias={medias} handleCloseForm={handleCloseForm}/>
  return(
    <div className=' col-span-10 ' style={{borderTopColor:'rgba(226, 221, 221, 1)'}}>
      <button onClick={handleShowForm} style={{backgroundColor:'rgba(57, 55, 55, 1)'}} className=' fixed bottom-5 right-5 p-2 rounded-full cursor-pointer z-30'><AddIcon sx={{color:'white'}}/></button>
      <div>
        {[{title:'Peinture', data:peintureMed},{title:'Plans', data:plansMed}, {title:'Placoplâtre', data:placoMed}, {title:'Decoration', data:decoMed}, ].map((elt, indx) => <SingleCategory setMedia={setMedia} AllMedias={medias} currIndx={currIndx} indx={indx} handleFull={handleFull} handleShowLess={handleShowLess} handleRef={(node) => singleCategoryRef.current.set(indx, node)}  key={indx} title={elt.title} medias={elt.data}/>)}
      </div>
      
    </div>
  )
}

export default Gallery
