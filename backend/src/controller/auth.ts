

const mockUsers = [
    { id: 1, email: 'admin@gmail.com', password: 'admin' },
    { id: 2, email: 'user@gmail.com', password: 'user' }
]



const auth = (req :Request , res :Response) => {
    const {email , password} = req.body;
}