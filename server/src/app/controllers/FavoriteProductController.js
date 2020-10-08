import User from '../models/User';
import Product from '../models/Product';

export default {
    async store(req, res){

    	const user = await User.findByPk(req.user.id);

    	if(!user)
    		return res.status(404).json({ error: 'Resource not found' });

    	return res.status(200).json("ok");
    }
}