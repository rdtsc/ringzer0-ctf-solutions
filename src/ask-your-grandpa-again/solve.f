      PROGRAM WFLAG                                                     13370010
      I=931                                                             13370020
      J=2800                                                            13370030
      WRITE(6,1337)J+29,(J/4)+20,I                                      13370040
 1337 FORMAT(11HFLAG-DFEB0D,I4,1H-,I3,10HFDBECDF39D,I3)                 13370050
      END                                                               13370060
