//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

contract Transactions{
    uint256 transactionCount;
    event Transfer(address _from,address _to,uint256 _amount,string _message,uint256 timestamp,string _keyword);
    struct TransferStruct{
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct[] transactions;
    function pushToBlockchain(address payable _receiver, uint256 _amount, string memory _message,string memory _keyword) public {
        transactionCount+=1;
        TransferStruct memory temp = TransferStruct(
            msg.sender,
            _receiver,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
        transactions.push(temp);
        emit Transfer(
            msg.sender,
            _receiver,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
    }
    function getAllTransactions() public view returns(TransferStruct[] memory) {
        
    }

    function getTransactionCount() public view  returns(uint256){
        return transactionCount;
    }
}