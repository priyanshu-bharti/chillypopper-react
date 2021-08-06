import { v4 as uuidv4 } from "uuid";

const songData = [
    {
        title: "Glaciar",
        artist: "Juan Rios",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=21648",
        palette: "coral",
        id: uuidv4(),
    },
    {
        title: "What If I Told You",
        artist: "Juan Rios",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "Toofpick",
        artist: "Blue Wednesday, Shopan",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=11227",
        palette: "purple",
        id: uuidv4(),
    },
    {
        title: "Airplane Mode",
        artist: "Axian, falcxne, Makzo",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=20121",
        palette: "green",
        id: uuidv4(),
    },

    {
        title: "Antematter",
        artist: "Toonorth",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=17938",
        palette: "purple",
        id: uuidv4(),
    },
    {
        title: "Almost Home",
        artist: "Chillhop Music",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=21781",
        palette: "green",
        id: uuidv4(),
    },
    {
        title: "Kinship",
        artist: "Sleepy Fish, mommy",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=19060",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Vintage",
        artist: "Evil Needle",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=17088",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "Naked Sunday",
        artist: "CYGN",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=14998",
        palette: "magenta",
        id: uuidv4(),
    },

    {
        title: "Caffeine",
        artist: "Felty",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9334",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "Dojo",
        artist: "SwuM",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8002",
        palette: "teal",
        id: uuidv4(),
    },
    {
        title: "Mozambique",
        artist: "Comodo",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8985",
        palette: "purple",
        id: uuidv4(),
    },
    {
        title: "Rockaway 5pm",
        artist: "auv",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/8ead77b24ce86e871c31691dec6a5983b9533db1-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/8ead77b24ce86e871c31691dec6a5983b9533db1-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9157",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "Magenta Forever",
        artist: "Aviino",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10458",
        palette: "pink",
        id: uuidv4(),
    },
    {
        title: "Build",
        artist: "Yasper, Louk",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/f5170130ca62e18fb3928feb3d851f3f07f77e18-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/f5170130ca62e18fb3928feb3d851f3f07f77e18-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7873",
        palette: "orange",
        id: uuidv4(),
    },
    {
        title: "Whale Call",
        artist: "Saib",
        coverUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/385d44fc6335bf676b30be524bcdfd7d640716a4-1024x1024.jpg",
        thumbUrl:
            "https://chillhop.com/wp-content/uploads/2020/07/385d44fc6335bf676b30be524bcdfd7d640716a4-150x150.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8099",
        palette: "cyan",
        id: uuidv4(),
    },
];

export default songData;
