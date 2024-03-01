import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { products } from '../constants/index';
import Nav from './components/Nav';

import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections';
import ProductDetails from './components/ProductDetails';

const App = () => (
  <BrowserRouter>
    <main className="relative">
      <Nav />
      <Switch>
        <Route exact path="/">
          <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
          </section>
          <section className="padding">
            <PopularProducts />
          </section>
          <section className="padding">
            <SuperQuality />
          </section>
          <section className="padding-x py-10">
            <Services />
          </section>
          <section className="padding">
            <SpecialOffer />
          </section>
          <section className="bg-pale-blue padding">
            <CustomerReviews />
          </section>
          <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe />
          </section>
          <section className="bg-black padding-x padding-t pb-8">
            <Footer />
          </section>
        </Route>

        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
