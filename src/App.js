import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import ArtBlocks from 'artblocks'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

function App() {
  let artblocks = new ArtBlocks("thegraph", "mainnet");
  const [projects, setProjects] = useState([])
  const [showprojects, setShowProjects] = useState([])
  const [projectId, setProjectId] = useState('')
  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')
  const [contract, setContract] = useState('')
  const [description, setDescription] = useState('')
  const [license, setLicense] = useState('')
  const [price, setPrice] = useState(0)
  const [website, setWebsite] = useState('')
  const [current_mint, setCurrentMint] = useState(0)
  const [max_mint, setMaxMint] = useState(0)
  const [token_code, setTokenCode] = useState('')

  //for sort and search and frame size
  const [sortDirection, setSortDirection] = useState(true)
  const [sortType, setSortType] = useState('id')
  const [searchID, setSearchID] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchArtist, setSearchArtist] = useState('')
  const [curatedState, setCuratedState] = useState('all')
  const [windowwidth, setWindowWidth] = useState(550)
  const [windowheight, setWindowHeight] = useState(550)
  const [framewidth, setFrameWidth] = useState(500)
  const [frameheight, setFrameHeight] = useState(500)
  useEffect(()=>{
    (async() => {
      var temp =await artblocks.projects()
      var list = [];
      await Promise.all(temp.map(async (value) => {
        const response = await artblocks.project_metadata(value.id)
        list.push(response)
      }) )
      console.log(list)
      setProjects(list)
      setShowProjects(list)
    })();
  },[])

  const Frame = ({html, width, height}) => {
    return (
      <div>
        <iframe srcDoc={html} width={width} height={height} frameBorder="0"/>
      </div>
    )
  }

  const shownProjectdetail = async (id) => {
    const response = await artblocks.project_metadata(id)
    console.log(response)
    setName(response.name);
    setArtist(response.artist);
    setContract(response.contract);
    setDescription(response.description);
    setLicense(response.license);
    setPrice(response.price_eth);
    setWebsite(response.website);
    setMaxMint(response.invocations_max)
    setCurrentMint(response.invocations)
    setProjectId(response.id)    
  }
  const showItemDetail = async (tokenid) => {
    const tokenGenerator = await artblocks.token_generator(tokenid)
    setTokenCode(tokenGenerator)
  }
  const showNFT = () => {
    console.log(window.innerWidth, window.innerHeight)
    const top = (window.innerHeight - windowheight)/2
    const left = (window.innerWidth - windowwidth)/2
    var win = window.open("", "", `width=${windowwidth}, height=${windowheight}, top = ${top}, left = ${left}, popup=true, directories=no, titlebar=no, toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no`);
    win.document.write(`<iframe width="${framewidth}" height="${frameheight}" frameborder="0" id="token_frame"></iframe>`)
    win.document.body.style.backgroundColor = "black"
    win.document.body.style.display = "flex"
    win.document.body.style.justifyContent = "center"
    // win.document.body.style.position = "relative"
    win.document.getElementById('token_frame').srcdoc = token_code
    // win.document.getElementById('token_frame').style.position = "absolute"
    // win.document.getElementById('token_frame').style.paddingTop = "50%"
    // win.document.getElementById('token_frame').style.transform = "translateY(-50%)"
  }
  const searchProject = async () => {
    if(curatedState == 'all'){
      const results = projects.filter((item) => { 
        return item.name.indexOf(searchName) > -1 && (""+item.id).indexOf(searchID) > -1 && (item.artist && item.artist.indexOf(searchArtist) > -1);
      });
      setShowProjects(results)
    }
    else{
      const results = projects.filter((item) => { 
        return item.name.indexOf(searchName) > -1 && (""+item.id).indexOf(searchID) > -1 && (item.artist && item.artist.indexOf(searchArtist) > -1) && (item.curation_status && item.curation_status.indexOf(curatedState) > -1);
      });
      setShowProjects(results)
    }
  }
  return (
    <div className="App">
      <div className='row'>
        <div className='col-4' style={{height : '100vh', overflow : 'auto', alignItems : 'center'}}>
          <p>Sort by</p>
          <Button variant="primary" className='sortBtn' onClick={() => {setSortType('id'); setSortDirection(!sortDirection); console.log(showprojects)}}>Project ID(Date)</Button>
          <Button variant="primary" className='sortBtn' onClick={() => {setSortType('name'); setSortDirection(!sortDirection)}}>Project Name</Button>
          <p>Search</p>
          <input placeholder='Search by Project ID' type={'number'} value={searchID} onChange = {(e) => {setSearchID(e.target.value)}} className='searchInput'/>
          <input placeholder='Search by Project Name' type={'text'} value={searchName} onChange = {(e) => {setSearchName(e.target.value)}} className='searchInput'/>
          <input placeholder='Search by Project Artist' type={'text'} value={searchArtist} onChange = {(e) => {setSearchArtist(e.target.value)}} className='searchInput'/>
          <label style={{marginRight : '20px'}}>Curation Status</label>
          <select onChange={(e) => {console.log(e.target.value); setCuratedState(e.target.value)}} defaultValue={curatedState}>
            <option value="all">All</option>
            <option value="curated">Curated</option>
            <option value="playground">Playground</option>
            <option value="factory">Factory</option>
          </select>
          <div style={{margin : '20px'}}>
          <Button variant="success" className='searchBtn' onClick={() => {searchProject()}}>Search</Button>
          </div>
          <label>Frame Size</label>
          <div>
          <label>Width</label>
          <input type={'number'} value={framewidth} onChange = {(e) => {setFrameWidth(e.target.value); setWindowWidth((Number)(e.target.value) + 50)}}/>
          <br/>
          <label>Height</label>
          <input type={'number'} value={frameheight} onChange = {(e) => {setFrameHeight(e.target.value); setWindowHeight((Number)(e.target.value) + 50)}}/>
          </div>
          <ListGroup variant="flush">
            {sortType == "id" ? (
              sortDirection ? 
              [].concat(showprojects)
              .sort((a, b) => a[sortType] > b[sortType] ? 1 : -1)
              .map((resItem, i) => 
              <ListGroup.Item key={resItem.id} onClick={()=>{shownProjectdetail(resItem.id)}}>{resItem.name}</ListGroup.Item>
              )
              :
              [].concat(showprojects)
              .sort((a, b) => a[sortType] < b[sortType] ? 1 : -1)
              .map((resItem, i) => 
              <ListGroup.Item key={resItem.id} onClick={()=>{shownProjectdetail(resItem.id)}}>{resItem.name}</ListGroup.Item>
              )
            )
            :
            (
              sortDirection ? 
                [].concat(showprojects)
                .sort((a, b) => a[sortType].toString().toLowerCase() > b[sortType].toString().toLowerCase() ? 1 : -1)
                .map((resItem, i) => 
                <ListGroup.Item key={resItem.id} onClick={()=>{shownProjectdetail(resItem.id)}}>{resItem.name}</ListGroup.Item>
                )
                :
                [].concat(showprojects)
                .sort((a, b) => a[sortType].toString().toLowerCase() < b[sortType].toString().toLowerCase() ? 1 : -1)
                .map((resItem, i) => 
                <ListGroup.Item key={resItem.id} onClick={()=>{shownProjectdetail(resItem.id)}}>{resItem.name}</ListGroup.Item>
                )
              )
            }
          </ListGroup>
        </div>
        <div className='col-8'>
          <p>Name : {name}</p>
          <p>Artist : {artist}</p>
          <p>{current_mint}/{max_mint} Minted</p>
          <p>Description : {description}</p>
          <p>Contract : {contract}</p>
          <p>Id : {projectId}</p>
          <p>License : {license}</p>
          <p>Price : {price}</p>
          <a href={website}>Website</a>
          <div className='row'>
            <div className='col-3'>
              <Button variant="success" className='searchBtn' onClick={() => {showNFT()}}>Show on Pop-up</Button>
              <p>TokenID</p>
              <div style={{height : '1000px', overflow : 'auto'}}>
                <ListGroup variant="flush">
                  {[...Array(current_mint)].map((v, index) => {
                    return <ListGroup.Item key={index} onClick={()=>{showItemDetail(projectId * 1000000 + index)}}>{projectId * 1000000 + index}</ListGroup.Item>
                  })}
                </ListGroup>
              </div>
            </div>
            <div className='col-9'>
              <Frame html={token_code} width={500} height={500}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
