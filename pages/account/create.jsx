import Head from 'next/head';
import Layout from '../../components/layout';

export default function accountCreate(){
    return (
        <Layout>
            <Head>Account Page</Head>
            <form className="container position-fixed bottom-0 mb-5 pb-5 " method="post" action="../api/account/user">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">名前</label>
                    <input type="text" className="form-control" name="name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputUniversity" className="form-label">大学名</label>
                    <input type="text" className="form-control" name="university"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputYear" className="form-label">学年</label>
                    <input type="number" className="form-control" name="year"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">メールアドレス</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">パスワード</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <button type="submit" className="btn btn-primary">アカウント作成</button>
                
            </form>
        </Layout>
    )
}