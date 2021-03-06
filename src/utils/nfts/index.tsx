import { mintTo } from '@project-serum/serum/lib/token-instructions';
import { PublicKey } from '@solana/web3.js';

enum NFT_Types {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
  REDEEMABLE = 'REDEEMABLE',
}

export class NFT {
  img: Object;
  imgSmall: Object;
  name: string;
  supply: number;
  mintAddress: PublicKey;
  marketAddress: PublicKey;
  redeembable: boolean;
  keywords: string[];
  type: NFT_Types;
  redeemAddress?: PublicKey;
  redeemDescription?: string;
  auctionDeadLine?: string;
  description?: string;
  constructor(
    img: Object,
    imgSmall: Object,
    name: string,
    supply: number,
    mintAddress: PublicKey,
    marketAddress: PublicKey,
    redeembable: boolean,
    keywords: string[],
    type: NFT_Types,
    redeemAddress?: PublicKey,
    redeemDescription?: string,
    auctionDeadLine?: string,
    description?: string,
  ) {
    this.img = img;
    this.imgSmall = imgSmall;
    this.name = name;
    this.supply = supply;
    this.mintAddress = mintAddress;
    this.marketAddress = marketAddress;
    this.redeembable = redeembable;
    this.keywords = keywords;
    this.type = type;
    this.redeemAddress = redeemAddress;
    this.redeemDescription = redeemDescription;
    this.auctionDeadLine = auctionDeadLine;
    this.description = description;
  }
}

const NFTS: NFT[] = [
  new NFT(
    require('../../assets/nfts/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA.gif'),
    require('../../assets/nfts/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA/small.mp4'),
    'FIDA - NFT.',
    10,
    new PublicKey('FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA'),
    new PublicKey('Hoo738bVaLdJmjXL6TbdyHmWME7ZijhdkpTR7AwZPT9m'),
    false,
    ['fida', 'bonfida'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb.gif'),
    require('../../assets/nfts/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb/small.mp4'),
    'FTX x Frontier Round 1',
    10,
    new PublicKey('4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb'),
    new PublicKey('C4YD46QQ7K59MY6cDd8qJwcfPTggiWa2fCsWXUUfq6nk'),
    false,
    ['front', 'frontier', 'ftx', 'round'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9.gif'),
    require('../../assets/nfts/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9/small.mp4'),
    'Unlimited Energy',
    10,
    new PublicKey('91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9'),
    new PublicKey('BnWVMg9dvBLbQDR9j96QP8q85SFPWEsyouZUEMLevkE3'),
    false,
    ['unlimited', 'energy', 'bonfida', 'front'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP.gif'),
    require('../../assets/nfts/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP/small.mp4'),
    'Need for Speed',
    25,
    new PublicKey('29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP'),
    new PublicKey('6u8M7NH853WRpxnLs9qKKZn3ShR9QK4Y6kE6X9A1s7wK'),
    false,
    ['need', 'speed', 'front'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo.gif'),
    require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/small.mp4'),
    'LSD',
    1,
    new PublicKey('AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo'),
    new PublicKey('BdU5UYU8AU9iTVJXF6Sxc63M6XY4XWqZpdq2PigoqA92'),
    false,
    ['lsd', 'gif'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL.jpeg'),
    require('../../assets/nfts/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL/small.jpeg'),
    'CMS - Rare',
    1,
    new PublicKey('EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL'),
    new PublicKey('GgWVyfbM1tfJ72vGfCinmqxhdQQkyy8t67YzWzc9izsA'),
    false,
    ['cms', 'holding'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ.gif'),
    require('../../assets/nfts/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ/small.mp4'),
    'DeceFi',
    1,
    new PublicKey('9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ'),
    new PublicKey('BKZSAFLqxBHKXJk3cw5pGdFCsKzyrouSG19KmiUQKXBh'),
    false,
    ['decefi', 'DCFI'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z.png'),
    require('../../assets/nfts/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z/small.png'),
    'Seldom',
    1500,
    new PublicKey('FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z'),
    new PublicKey('AQWam8CiWsbqQWGToD9vwYRStZTYAuCuUKnV3iorDasA'),
    false,
    ['seldom', 'wallet'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD.JPG'),
    require('../../assets/nfts/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD/small.JPG'),
    'Satoshi Closeup',
    10,
    new PublicKey('2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD'),
    new PublicKey('7CGbje815jANonTXSBsdP7nkRLwy3ShLLvZFZRjtU7g2'),
    false,
    ['satoshi', 'closeup', 'genesis', 'block'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR.JPG'),
    require('../../assets/nfts/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR/small.JPG'),
    'Satoshi GB',
    10,
    new PublicKey('7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR'),
    new PublicKey('EHKqPgFnWHzUvgqzhroSeEDp4mD2em2RasxMmTPHDP6x'),
    false,
    ['satoshi', 'gb', 'genesis', 'block'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH.gif'),
    require('../../assets/nfts/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH/small.mp4'),
    'Satoshi GB',
    10,
    new PublicKey('AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH'),
    new PublicKey('5W39A7d5iqHzh7oUHyu37HBN2nx7Ptg4yrSvgz1A8sq9'),
    false,
    ['satoshi', 'gb', 'genesis', 'block', 'gif'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g.gif'),
    require('../../assets/nfts/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g/small.mp4'),
    'CZ vs SBF',
    1,
    new PublicKey('822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g'),
    new PublicKey('2WbNP2KesAC4LekDhS8QTEjCTV5E3negSeJyMU4WBFaf'),
    false,
    ['cz', 'sbf', 'binance', 'ftx'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1.gif'),
    require('../../assets/nfts/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1/small.mp4'),
    'Sound Wave',
    3,
    new PublicKey('FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1'),
    new PublicKey('EHaWsSQCTBa92QuSM4XDDz5uj4EzZ5mjvgcEtJb2GFZp'),
    false,
    ['solana', 'sound', 'wave'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL/GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL.gif'),
    require('../../assets/nfts/GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL/small.mp4'),
    'Car Phoenix',
    5,
    new PublicKey('GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL'),
    new PublicKey('Aw9Xpq98pqHPYXNTbnEoCrsUKwZePk2kTgYqEiZk4t2g'),
    false,
    ['car', 'phoenix'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o/2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o.gif'),
    require('../../assets/nfts/2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o/small.mp4'),
    'Bunker Burn',
    5,
    new PublicKey('2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o'),
    new PublicKey('GG3Hj7mbwSD4KTQq49TSq2dL3zRe6ehd5f6d9Fiq866C'),
    false,
    ['bunker', 'burn'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz/ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz.gif'),
    require('../../assets/nfts/ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz/small.mp4'),
    'Junkyard Stock Burn',
    5,
    new PublicKey('ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz'),
    new PublicKey('J5iz46mEeW1ijw6sXBn31Ax8Zvd6JVaJAiirDVSRTewW'),
    false,
    ['junkyar', 'burn', 'stock'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ/2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ.gif'),
    require('../../assets/nfts/2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ/small.mp4'),
    'Stock Submersion',
    5,
    new PublicKey('2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ'),
    new PublicKey('Ee7UAzpU5ob6MV3VK7R8yVk5u7YahDdd3PiBDCnxoFbJ'),
    false,
    ['submersion', 'stock'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE/561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE.gif'),
    require('../../assets/nfts/561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE/small.mp4'),
    'Sustained Burn',
    5,
    new PublicKey('561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE'),
    new PublicKey('ARmUiLq7BRqc3p63K7RpFHKqWBThdx55tJoVhqP6zydB'),
    false,
    ['sustained', 'burn'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn/EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn.png'),
    require('../../assets/nfts/EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn/small.png'),
    'CME ETH',
    1,
    new PublicKey('EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn'),
    new PublicKey('C6qqVbBeYrW4g2NVdbRjARPfuPpAYScQbW7m7eA41soH'),
    false,
    ['cme', 'eth'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R/ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R.jpg'),
    require('../../assets/nfts/ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R/small.jpg'),
    'Luther Blissett #0',
    1,
    new PublicKey('ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R'),
    new PublicKey('GbJUTEyG1YUk2VKFkyQhcayMtMAsm88xk1sa9oW9g2cy'),
    false,
    ['luther', 'blissett', '#0'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz/7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz.jpg'),
    require('../../assets/nfts/7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz/small.jpg'),
    'Luther Blissett #0/1',
    1,
    new PublicKey('7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz'),
    new PublicKey('6fD7Jh2EhKTvfxByAi2v9ZqHbQoBLSJPU7gyveTh5Cn9'),
    false,
    ['luther', 'blissett', '#0/1'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN/CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN.png'),
    require('../../assets/nfts/CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN/small.png'),
    'Doge',
    430,
    new PublicKey('CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN'),
    new PublicKey('2fu9wSLUqTaFTuthh77UQo1VDmUQWxstitpFVn83io49'),
    false,
    ['doge'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3/CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3.jpg'),
    require('../../assets/nfts/CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3/small.jpg'),
    'SBF worked hard',
    1,
    new PublicKey('CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3'),
    new PublicKey('7iGPwQrLfWmUhuWc2a2c8KwveW5sqShziEbV4Y17SA2U'),
    false,
    ['sbf', 'worked', 'hard'],
    NFT_Types.IMAGE,
  ),
];

export default NFTS;

export const REDEEMABLE_NFTS: NFT[] = [
  new NFT(
    require('../../assets/nfts/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf.gif'),
    require('../../assets/nfts/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf/small.mp4'),
    'SRM Socks',
    5,
    new PublicKey('94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf'),
    new PublicKey('H4WRoAMyGAxtTX5dLsvFYkxCgLXWjMUdWpNqST8E3jzx'),
    true,
    ['srm', 'serum', 'sock', 'kong'],
    NFT_Types.VIDEO,
    new PublicKey('9QTrBTjooTK4NQ5QkYQGUNkyo8grpMrrmjMXAh3bJVtd'),
    'This NFT can be redeemed for a physical pair of Serum Socks mailed to your door',
  ),
  new NFT(
    require('../../assets/nfts/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd.jpg'),
    require('../../assets/nfts/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd/small.jpg'),
    'SRM tee-shirt',
    8,
    new PublicKey('7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd'),
    new PublicKey('rxqQa92aD8ZZGuyc2mjCARG4f832dBmQo9xiasX5mzq'),
    true,
    ['srm', 't', 'shirt', 'tee-shirt', 'redeem'],
    NFT_Types.IMAGE,
    new PublicKey('4bGXwBj7222chiksjAF4XcsqebamRNQUBqxdRQeYHYMr'),
    'This NFT can be redeemed for a physical SRM tee-shirt mailed to your door. All sizes are availble (M/F).',
  ),
  new NFT(
    require('../../assets/nfts/Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB/Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB.JPG'),
    require('../../assets/nfts/Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB/small.JPG'),
    'DOGE',
    1,
    new PublicKey('Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB'),
    new PublicKey('4hmeyB32Kcm8ZSGR4ELVqUh4n6pu2dRqa1Y1pZMB4uve'),
    true,
    ['doge', 'painting'],
    NFT_Types.IMAGE,
    new PublicKey('7aMoYNa3M6r1F4QrkPmUPpjRtEXbDaNpaWkFXW1wvNuj'),
    'This NFT can be redeemed for the real painting mailed to your door',
    '2021-02-14T21:00:00.000+08:00',
  ),
  new NFT(
    require('../../assets/nfts/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ.png'),
    require('../../assets/nfts/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ/small.png'),
    'Ledger Nano X',
    30,
    new PublicKey('8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ'),
    new PublicKey('327ubUZkUUAEdeWvyQYh1Ycs9mt6yDnt7jDAW47U3krw'),
    true,
    ['ledger', 'nano', 'x', 'black', 'friday'],
    NFT_Types.IMAGE,
    new PublicKey('EvXsVnNu9mxo63tPiGNbLy3mwb6Zy4qT59RR62Y2UJW1'),
    'This NFT can be redeemed for a Ledger Nano X branded Serum mailed to your door. The market will be unlisted on 30/11/2020 at 9pm UTC +8. After this date you will only be able to redeem.',
    '2020-11-30T21:00:00.000+08:00',
  ),
  new NFT(
    require('../../assets/nfts/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx.jpg'),
    require('../../assets/nfts/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx/small.jpg'),
    'Bitcoin Tram',
    5,
    new PublicKey('AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx'),
    new PublicKey('CWkuMPt24aZFA4sHTUs43zwp3N8Lh9UfKNAScQqQ8uUg'),
    true,
    ['bitcoin', 'tram', 'hong', 'kong'],
    NFT_Types.IMAGE,
    new PublicKey('FCHmpXY6AQifAwe6SjAEGfF6APTPEcCjyNFAHn83ijdb'),
    'This NFT can be redeemed for a physical Bitcoin Tram model mailed to your door',
    '2020-11-06T21:00:00.000+08:00',
  ),
];

export const ALL = [...REDEEMABLE_NFTS, ...NFTS];

export const DEFAULT_NFT = new NFT(
  require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo.gif'),
  require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/small.mp4'),
  'LSD',
  1,
  new PublicKey('AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo'),
  new PublicKey('BdU5UYU8AU9iTVJXF6Sxc63M6XY4XWqZpdq2PigoqA92'),
  false,
  ['lsd', 'gif'],
  NFT_Types.VIDEO,
);

export const getNftList = () => {
  return ALL;
};

export const getRedeemableNftList = () => {
  return REDEEMABLE_NFTS;
};

export const getNonRedeemableNftList = () => {
  return NFTS;
};

export const getExceptionalStyle = (mint: PublicKey): any => {
  switch (mint.toBase58()) {
    case '94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf':
      return { top: 80 };
    default:
      return null;
  }
};
