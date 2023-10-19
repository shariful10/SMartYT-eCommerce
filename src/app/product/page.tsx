type Props = {
    searchParams: {[key: string]: string | string[] | undefined},
}

const ProductPage = ({ searchParams }: Props) => {
    console.log(typeof searchParams._id);

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage