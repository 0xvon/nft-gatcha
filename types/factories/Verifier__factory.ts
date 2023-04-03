/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Verifier, VerifierInterface } from "../Verifier";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "pi_a",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "X",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "Y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "pi_b",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "pi_c",
            type: "tuple",
          },
        ],
        internalType: "struct Verifier.Proof",
        name: "_proof",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "input",
        type: "uint256[]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611326806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806388b225b614610030575b600080fd5b61004361003e36600461118c565b610057565b604051901515815260200160405180910390f35b6000610061610ed5565b6040805180820182528551518152855160209081015181830152908352815160808101835281870180515183015182850190815281515151606084015282528351808501855281518401518401518152905183015151818401528183015283820152815180830183528683018051518252518201519181019190915290820152825160009067ffffffffffffffff8111156100fe576100fe61100f565b604051908082528060200260200182016040528015610127578160200160208202803683370190505b50905060005b845181101561017f578481815181106101485761014861124c565b60200260200101518282815181106101625761016261124c565b60209081029190910101528061017781611278565b91505061012d565b5061018a81836101b0565b60000361019c576001925050506101aa565b6000925050506101aa565b50505b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101dc6103a5565b9050806080015151855160016101f29190611291565b146102395760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b865181101561032a578387828151811061026c5761026c61124c565b6020026020010151106102c15760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c64006044820152606401610230565b6103168261031185608001518460016102da9190611291565b815181106102ea576102ea61124c565b60200260200101518a85815181106103045761030461124c565b602002602001015161082c565b6108ba565b91508061032281611278565b915050610250565b506103538183608001516000815181106103465761034661124c565b60200260200101516108ba565b90506103896103658660000151610953565b8660200151846000015185602001518587604001518b6040015189606001516109f2565b61039957600193505050506101aa565b50600095945050505050565b6103ad610f26565b6040805180820182527f2ea82efafa700aa9672b7b023e0f848dd618894e27d8869aaf9aaf0e93f4f10c81527f0c4f8bd1d6aa572e2413de9663fe409c25b4b11bffdacf3f0baecaf208376f8e6020808301919091529083528151608080820184527f047e2bcb37e950f0efee4a7a2ac75ac659d6cc744a1f3708cbbc60e08545fbf38285019081527f205211fab6fa22a84441fd32ef55dc5bc8f065da222bcdffc5e60bc4885adbe3606080850191909152908352845180860186527f22e9cf9b4d2033368981bf1c65f0cb30b2009c33971f892961a94a5688a9abf581527eb2661d5639b822e69fa8677921e843a01d771ab277621118cd8a8e06b697a8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f0ba1d787ed594e056e80ab2a3e814454028b37eda2ac75cbb0df71243b5af9bd8185019081527f0e0ce808bf264f5c0ff3831cb1b69756ff828a59fdd432e9a636cd396b687aee828401528152835180850185527f0aad48bb5e5bf94fdfa09cd2807dac6509cdfffb78444afec8bce5f1aca3db4481527f13ad43b5930aa23fc498cbf4c380b3892ff5c84d1e0614607f7ab4eea7b27f458185015281840152908401528151600480825260a08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161062757505060808201908152604080518082019091527f073af5d88927592b0c33f01066c5b769cc18a3eab2cede766e154f26a1f9af9381527f282f57d4ac612f45de38ff32be281acb638b943a5396f3dfbaad39d3db6085a36020820152905180516000906106ba576106ba61124c565b602002602001018190525060405180604001604052807f0b1796f5491e08bc393ef3743c6ab858f636556dc2bfcc43757f3bffddd4b1ec81526020017f1e4bb3783f7383c311c5acb0e3b1358ba2224e7e38ac245998924ca86321532d81525081608001516001815181106107315761073161124c565b602002602001018190525060405180604001604052807f03ed0b0aec4ac4c2e72a049faa7915afccf13dfe1a6f04ef21dab0ae4805b83581526020017e917b86015f1dc3ad95afe9b190fb227db94f0839607c4b96fad591d7e3b29281525081608001516002815181106107a7576107a761124c565b602002602001018190525060405180604001604052807f0a26e2c50c61ca589bdff79672edc5702bce2cbbef3baa272477eaa80ccd9af181526020017f0ca499b1647ea43b0c7b7b04306625c122c63852e68866dda653e66d8c1a14e3815250816080015160038151811061081e5761081e61124c565b602002602001018190525090565b6040805180820190915260008082526020820152610848610f77565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808061087757fe5b50806101a75760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b6044820152606401610230565b60408051808201909152600080825260208201526108d6610f95565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808061091057fe5b50806101a75760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b6044820152606401610230565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479015801561099a57506020830151155b156109ba5750506040805180820190915260008082526020820152919050565b6040518060400160405280846000015181526020018285602001516109df91906112a4565b6109e990846112c6565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610a0d57505060408051600480825260a0820190925291925060009190602082015b610a57610fb3565b815260200190600190039081610a4f5790505090508a82600081518110610a8057610a8061124c565b60200260200101819052508882600181518110610a9f57610a9f61124c565b60200260200101819052508682600281518110610abe57610abe61124c565b60200260200101819052508482600381518110610add57610add61124c565b60200260200101819052508981600081518110610afc57610afc61124c565b60200260200101819052508781600181518110610b1b57610b1b61124c565b60200260200101819052508581600281518110610b3a57610b3a61124c565b60200260200101819052508381600381518110610b5957610b5961124c565b6020026020010181905250610b6e8282610b7d565b9b9a5050505050505050505050565b60008151835114610bc95760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b6044820152606401610230565b82516000610bd88260066112d9565b905060008167ffffffffffffffff811115610bf557610bf561100f565b604051908082528060200260200182016040528015610c1e578160200160208202803683370190505b50905060005b83811015610e5957868181518110610c3e57610c3e61124c565b60200260200101516000015182826006610c5891906112d9565b610c63906000611291565b81518110610c7357610c7361124c565b602002602001018181525050868181518110610c9157610c9161124c565b60200260200101516020015182826006610cab91906112d9565b610cb6906001611291565b81518110610cc657610cc661124c565b602002602001018181525050858181518110610ce457610ce461124c565b6020908102919091010151515182610cfd8360066112d9565b610d08906002611291565b81518110610d1857610d1861124c565b602002602001018181525050858181518110610d3657610d3661124c565b60209081029190910181015151015182610d518360066112d9565b610d5c906003611291565b81518110610d6c57610d6c61124c565b602002602001018181525050858181518110610d8a57610d8a61124c565b602002602001015160200151600060028110610da857610da861124c565b602002015182610db98360066112d9565b610dc4906004611291565b81518110610dd457610dd461124c565b602002602001018181525050858181518110610df257610df261124c565b602002602001015160200151600160028110610e1057610e1061124c565b602002015182610e218360066112d9565b610e2c906005611291565b81518110610e3c57610e3c61124c565b602090810291909101015280610e5181611278565b915050610c24565b50610e62610fd3565b6000602082602086026020860160086107d05a03fa90508080610e8157fe5b5080610ec75760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b6044820152606401610230565b505115159695505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101610eff610fb3565b8152602001610f21604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c0830191909152815260208101610f50610fb3565b8152602001610f5d610fb3565b8152602001610f6a610fb3565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280610fc6610ff1565b8152602001610f21610ff1565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156110485761104861100f565b60405290565b6040516060810167ffffffffffffffff811182821017156110485761104861100f565b60006040828403121561108357600080fd5b61108b611025565b9050813581526020820135602082015292915050565b600082601f8301126110b257600080fd5b6110ba611025565b8060408401858111156110cc57600080fd5b845b818110156110e65780358452602093840193016110ce565b509095945050505050565b600082601f83011261110257600080fd5b8135602067ffffffffffffffff8083111561111f5761111f61100f565b8260051b604051601f19603f830116810181811084821117156111445761114461100f565b60405293845285810183019383810192508785111561116257600080fd5b83870191505b8482101561118157813583529183019190830190611168565b979650505050505050565b6000808284036101208112156111a157600080fd5b610100808212156111b157600080fd5b6111b961104e565b6111c38787611071565b81526080603f19840112156111d757600080fd5b6111df611025565b92506111ee87604088016110a1565b83526111fd87608088016110a1565b60208401528260208201526112158760c08801611071565b60408201529350840135905067ffffffffffffffff81111561123657600080fd5b611242858286016110f1565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161128a5761128a611262565b5060010190565b808201808211156101aa576101aa611262565b6000826112c157634e487b7160e01b600052601260045260246000fd5b500690565b818103818111156101aa576101aa611262565b80820281158282048414176101aa576101aa61126256fea26469706673582212204854105af5046da8f35375bc5fdf244bb7fea1fbb86b015b677cb754a876bc7764736f6c63430008120033";

type VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier__factory extends ContractFactory {
  constructor(...args: VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier> {
    return super.deploy(overrides || {}) as Promise<Verifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  override connect(signer: Signer): Verifier__factory {
    return super.connect(signer) as Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierInterface {
    return new utils.Interface(_abi) as VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}