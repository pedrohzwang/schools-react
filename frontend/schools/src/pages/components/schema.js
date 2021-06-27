import * as Yup from 'yup';

export default Yup.object().shape({
    email: Yup.string().email(),
    senha: Yup.string().min(8)
});
