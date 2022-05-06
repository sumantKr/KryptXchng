
export const slicedAccount=(account)=>{
    return account.slice(0,10)+'....'+ account.slice(account.length-10)
}
