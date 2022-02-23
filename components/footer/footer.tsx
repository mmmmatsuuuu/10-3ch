export const Footer:React.FC = () => {
    return (
        <div className='max-w-screen-xl m-auto bg-gradient-to-r from-green-400 to-sky-400 pt-1'>
            <div className='bg-white grid grid-cols-1 md:grid-cols-3 p-2'>
                <div className="md:col-span-2 flex">
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH }/logo.svg`} alt="logo" className="md:px-8 w-16 md:w-48"/>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="pr-4">管理者</td>
                                    <td>松村</td>
                                </tr>
                                <tr>
                                    <td className="pr-4">職業</td>
                                    <td>県立の高校で情報を担当</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="hidden md:block">
                </div>
            </div>
            <div className="bg-white text-center mb-4">
            copyright © 10.3ch All Rights Reserved.
            </div>
        </div>
    )
}