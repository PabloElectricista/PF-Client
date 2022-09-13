import Cards from '../../components/Card/Cards'
import Pagination from '../../components/Pagination/Pagination';
import Filterscomponent from '../../components/Filters/Filterscomponent'
import Ordercomponent from '../../components/Order/Ordercomponent';

function Home() {

    return <div className="container">
            <Ordercomponent />
        <div className="d-flex justify-content-between m-3">
            <Filterscomponent />
            <Cards />
        </div>
        <Pagination />
    </div>
}

export default Home;