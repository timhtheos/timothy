# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "timothyae"
  spec.version       = "0.1.0"
  spec.authors       = ["Timothy Escopete"]
  spec.email         = ["site@timothyae.com"]

  spec.summary       = %q{Official website of Timothy Escopete.}
  spec.homepage      = "https://timothyae.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|bin|_layouts|_includes|lib|Rakefile|_sass|LICENSE|README)}i) }
  spec.executables   << 'timothyae'

  spec.add_development_dependency "bundler", "~> 2.2.24"
  spec.add_runtime_dependency "jekyll", ">= 3.8.5"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
  spec.add_runtime_dependency "rake", ">= 12.3.1", "< 13.1.0"

end
