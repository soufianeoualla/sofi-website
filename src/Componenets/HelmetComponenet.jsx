import { Helmet } from 'react-helmet'

const HelmetComponenet = ({name}) => {
  return (
    
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title className=' capitalize'>{name}</title>
        <link rel="canonical" href={`/${name}`} />
    </Helmet>
    
</div>
  )
}

export default HelmetComponenet