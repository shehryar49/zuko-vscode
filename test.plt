import std/ll.plt

#-
this
is
a
multiline
comment
-#

# single line comment
var id123_ = 230
var number = 12332
var float  = 1.23434
var scinot = 1.23e10
var bool = true or false and true
var _nil = nil
var byte = 0x40
var str = "hello"
var mstr = "
  this
  is
  a
  multiline string"


class myclass
{
    private var x = 30
    public var y = 40
    function f()
    {
        var _self = self
        return 300
    }
}

while(true) 
{
    if(false)
    {
    }
    else
    {

    }
}

var errors = [
    Error,
    TypeError,
    MathError,
    IndexError,
    NameError,
    ValueError,
    OverflowError,
    FileIOError,
    FileOpenError,
    FileSeekError,
    AccessError,
    MaxRecursionError,
    ThrowError,
    ImportError,
    KeyError,
    ArgumentError
]