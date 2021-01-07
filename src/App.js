import react, { Component } from 'react';
import Web3 from "web3";
class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AirdropAmount:0
     };
  }
  async componentDidMount() {
    //判断页面是否安装了Metamask
    if(typeof window.ethereum !== 'undefined'){
      const ethereum = window.ethereum
      //禁止页面自动刷新，metamask要求写的
      ethereum.autoRefreshOnNetwoorkChange = false

      try{
        //第一次链接Metamask
        const accounts = await ethereum.enable()
        console.log(accounts)
        //初始化Provider
        const provider = window['ethereum']
        console.log(provider)
        //获取网络ID
        console.log(provider.chainId)
        //实例化Web3
        const web3 = new Web3(provider)
        console.log(web3)

        //导入abi文件
        const abi = require("./contract.abi.json")
        //定义合约地址
        const address = "0x6ce2f1206a8b6736543e357049a7e17f0cb29368"
        //实例化合约
        window.myContract = new web3.eth.Contract(abi.abi,address)
        console.log(window.myContract)

        window.defaultAccount = accounts[0].toLowerCase()
        console.log(window.defaultAccount)

        //切换Metamask帐号
        ethereum.on('accountsChanged', function (accounts){
          console.log("accountsChanged:" + accounts)
        })
        //切换Metamaskm网络ID
        ethereum.on('networkChanged', function (networkVersion){
          console.log("networkChanged:" + networkVersion)
        })

      }catch(e){


      }

    }else{
      console.log('没有metamask')
    }
  }
  Getter = () => {
    window.myContract.methods.AirdropAmount().call().then(AirdropAmount=>{
      console.log(AirdropAmount)
      this.setState({AirdropAmount:AirdropAmount})
    })
  }

  getAirdrop =() => {
    window.myContract.methods.getAirdrop().send({from:window.defaultAccount})
    .on('transactionHash',(transactionHash)=>{
      console.log('transactionHash',transactionHash)
    })
    .on('receipt',(receipt)=>{
      console.log({receipt:receipt})
    })
    .on('error',(error,receipt)=>{
      console.log({error:error,receipt:receipt})
    })
  }


  render() {
    return (
      <div>
      <div>
      <h2>LG空投领取</h2>
      <p>每个人只可领取一次，请勿重复领取</p>
      </div>
      <hr/><hr/>
      <div>
        &nbsp;&nbsp; <button onClick={() => { this.Getter() }} ><h4>每人可领数量</h4></button>
      &nbsp; {this.state.AirdropAmount/10**18}
      </div>
      <hr/>
      &nbsp;&nbsp;<button onClick={() => {this.getAirdrop()}}><h2>领取空投</h2></button>
      </div>
    );
  }
}



export default App;
