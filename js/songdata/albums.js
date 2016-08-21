function RegisterAlbum(ReferenceName,Name,Songs) {
  var AlbumSongs = []
  for (var i = 0; i < Songs.length; i = i + 3) {
    var SongsTable = []
    var Song1 = Songs[i]
    var Song2 = Songs[i + 1]
    var Song3 = Songs[i + 2]

    if (Song1 != null) {
      SongsTable[0] = [i+1,Song1]
    }
    if (Song2 != null) {
      SongsTable[1] = [i+2,Song2]
    }
    if (Song3 != null) {
      SongsTable[2] = [i+3,Song3]
    }

    AlbumSongs[AlbumSongs.length] = SongsTable
  }
  Albums[ReferenceName] = [Name,AlbumSongs]
}

RegisterAlbum("synthesized4","Sota Fujimori - SYNTHESIZED 4",["ELECTRONIC"])
RegisterAlbum("synthesized5","Sota Fujimori - SYNTHESIZED 5",["Illuminate -Extended Mix-", "WOBBLE IMPACT -Extended Mix-"])

RegisterAlbum("sugoikimochiii","DJ TECHNORCH - Feeling Mega Good!!",["NINJUUZAIKU -HITOBUTA-"])
