
const Product = () => {



    return (
        <div class="container page-wrapper">
		<div class="page-inner">
			<div class="row">
				<div class="el-wrapper">
					<div class="box-up">
						<img class="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt=""/>
						<div class="img-info">
							<div class="info-inner">
								<span class="p-name">I feel like Pablo</span>
								<span class="p-company">Yeezy</span>
							</div>
							<div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
						</div>
					</div>

					<div class="box-down">
						<div class="h-bg">
							<div class="h-bg-inner"></div>
						</div>

						<a class="cart" href="#">
							<span class="price">$120</span>
							<span class="add-to-cart">
								<span class="txt">Add in cart</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Product
