import React,{useEffect, useState} from 'react'
import repositoriesData from '../repositories.json'
import { LuRefreshCw } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import '../Styles/Repository.css'
const Repository = ({isClicked}) => {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRepositories,setfilterRepositories]=useState(repositoriesData);
    
  useEffect(()=>{
    setfilterRepositories(prev=>prev.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())));
  },[searchQuery]);
   
  return (
    <div className="repository_value">
        <Header totalRepositories={repositoriesData.length} isClicked={isClicked}/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} isClicked={isClicked}/>
      <RepositoryList repositories={filteredRepositories} />
    </div>
  )
}
function Header({ totalRepositories ,isClicked}) {
    return (
      <div className={`header_component ${isClicked?"not_display_comp":""}`}>
        <div className="name_count">
        <h1>Repositories</h1>
        <p>{totalRepositories} total repositories</p>
        </div>
        <div className="header-buttons">
          <button className="refresh"><span><LuRefreshCw /></span>Refresh All</button>
          <button className="add"><span><GoPlus /></span>Add Repository</button>
        </div>
      </div>
    );
  }
  function SearchBar({ searchQuery, setSearchQuery ,isClicked}) {
    return (
        <div className={`search-bar ${isClicked?"not_display_comp":""}`}>
        <CiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search Repositories"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  }
  function RepositoryList({ repositories }) {
    return (
      <div className="repository-list">
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </div>
    );
  }
  function RepositoryItem({ repo }) {
    return (
      <div className="repository-item">
        <div className="repo-details">
          <h3>
            {repo.name} <span className={`status ${repo.access}`}>{repo.access}</span>
          </h3>
          <div className="repo_imform">
          <p className='framework_status'>{repo.framework} <div className="status_by_color"></div></p>
          
          <p>{repo.size} KB</p>
          <p>Updated {repo.updated} ago</p>
          </div>
        </div>
      </div>
    );
  }

export default Repository
