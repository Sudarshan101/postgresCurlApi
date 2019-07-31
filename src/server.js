import app from './app';
import "@babel/polyfill"

async function main(){
    await app.listen(process.env.PORT || 7557);
    console.log("server run on 7557");
}
main();