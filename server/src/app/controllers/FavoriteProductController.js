import User from '../models/User';
import Product from '../models/Product';

export default {
    async store(req, res){

		console.log("ASKDLKASJDLKAJSDLKJASDLKAJSDLKDAJ");

    	const user = await User.findByPk(req.user.id);

    	if(!user)
			return res.status(404).json({ error: 'Resource not found' });
		
		const { slug } = req.body;
		const product = await Product.findOne({ where: { slug } });

		if(!product){
			return res.status(404).json({ error: 'Resource not found' });
		}

		await user.ad;

    	return res.status(200).json({ user, product });
    }
}