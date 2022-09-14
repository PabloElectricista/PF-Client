import Cards from '../../components/Card/Cards'
import Pagination from '../../components/Pagination/Pagination';
import Filterscomponent from '../../components/Filters/Filterscomponent'
import Ordercomponent from '../../components/Order/Ordercomponent';

function Home() {

    return <div className="container">
        <div className="row">
            <Filterscomponent />
            <Ordercomponent />
        </div>
        <div className="row">
            <Cards />
        </div>
        <div className="row">
            <Pagination />
        </div>
    </div>
}

export default Home;