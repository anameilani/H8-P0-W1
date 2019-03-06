var nama = null
var peran = null

if(nama == null){
    console.log('Nama harus diisi!')

}else if (peran == null) {
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game!')
    
} else {
    switch (peran) {
        case 'Ksatria':
            console.log('Selamat datang di Dunia Proxytia, '+nama)
            console.log('Halo Ksatria '+nama+', kamu dapat menyerang dengan senjatamu!')
            break;

        case 'Tabib':
            console.log('Selamat datang di Dunia Proxytia, '+nama)
            console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka.')
            break;

        case 'Penyihir':
            console.log('Selamat datang di Dunia Proxytia, '+nama)
            console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu!')
            break;
    
        default:
            break;
    }
    
}  
