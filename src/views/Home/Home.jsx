import Cards from '../../components/Card/Cards'
import Pagination from '../../components/Pagination/Pagination';
import Filterscomponent from '../../components/Filters/Filterscomponent'

function Home() {

    return <div className="container">
        <div className="d-flex justify-content-between m-3">
            <Filterscomponent />
            <Cards />
        </div>
        <Pagination />
    </div>
}

export default Home;