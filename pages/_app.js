import '../styles/globals.css'
import App from 'next/app';
import Layout from '../components/_App/Layout'
import Recipes from '../components/Recipe/recipes';

class MyApp extends App{
  static async getInitialProps({ Component, ctx }) {

    let pageProps = {};

    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps}/>
         <Recipes/> 
      </Layout> 
      
    )
  }
}

export default MyApp
