@testset "build" begin
    mktempdir() do dir
        files = map(1:2) do i
            without_extension = "file$i"
            file = "$(without_extension).jl"
            content = pluto_notebook_content("""
                x = begin
                    sleep(3)
                    x = 3000 + $i
                end
                """)
            path = joinpath(dir, file)
            write(path, content)
            return file
        end
        build_notebooks(BuildOptions(dir, use_distributed=false))

        html_file = joinpath(dir, "file1.html")
        @test contains(read(html_file, String), "3001")

        html_file = joinpath(dir, "file2.html")
        @test contains(read(html_file, String), "3002")
    end
end

@testset "is_pluto_file" begin
    cd(mktempdir()) do
        nb_text = """
            ### A Pluto.jl notebook ###
            # v0.14.0
            """
        write("true.jl", nb_text)
        @test PlutoStaticHTML._is_pluto_file("true.jl")

        jl_text = """
            module Foo
            end # module
            """
        write("false.jl", jl_text)
        @test !PlutoStaticHTML._is_pluto_file("false.jl")
    end
end

@testset "invalid_notebook" begin
    try
        mktempdir() do dir
            content = pluto_notebook_content("@assert false")
            file = "file.jl"
            path = joinpath(dir, file)
            write(path, content)
            build_notebooks(BuildOptions(dir), [file], use_distributed=false)
        end
        error("Test should have failed")
    catch AssertionError
        @test true # Success.
    end
end

@testset "extract_previous_output" begin
    # function extract_previous_output(html::AbstractString)::String
    html = """
        lorem
        $(PlutoStaticHTML.BEGIN_IDENTIFIER)
        ipsum
        $(PlutoStaticHTML.END_IDENTIFIER)
        dolar
        """
    actual = PlutoStaticHTML.extract_previous_output(html)
    expected = """
        $(PlutoStaticHTML.BEGIN_IDENTIFIER)
        ipsum
        $(PlutoStaticHTML.END_IDENTIFIER)
        """
    @test strip(actual) == strip(expected)
end

