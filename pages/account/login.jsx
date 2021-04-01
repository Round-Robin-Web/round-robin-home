import Head from 'next/head';
import Layout from '../../components/layout';

export default function Login(){
    return (
        <Layout>
            <Head>Login Page</Head>
            <div className="container position-fixed bottom-50">
                <h1>ログイン</h1>
                <form　method="post" action="../api/account/login">
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">メールアドレス</label>
                        <input type="email" className="form-control" name="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">パスワード</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">ログイン</button>
                </form>
            </div>
            
        </Layout>
    )
}