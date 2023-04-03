include "circomlib/circuits/poseidon.circom";
include "circomlib/circuits/mimc.circom";

template NFTGacha(n) {
    // 入力として、gachaの中身のインデックスと秘密鍵を受け取ります。
    signal input index;
    signal input secret;
    
    // 出力として、gachaの中身のインデックスを秘匿化した値を生成します。
    signal output hash;
    
    component hasher = Poseidon(2);
    hasher.inputs[0] <== index;
    hasher.inputs[1] <== secret;

    hash <== hasher.output;
}

component main = Gacha(1);
