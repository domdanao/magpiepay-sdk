// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "MagpiePaySample",
    platforms: [
        .macOS(.v10_15)
    ],
    dependencies: [
        .package(path: "../../sdks/DomDanaoMagpiePay")
    ],
    targets: [
        .executableTarget(
            name: "MagpiePaySample",
            dependencies: [
                .product(name: "DomDanaoMagpiePaySdkSwift", package: "DomDanaoMagpiePaySdkSwift")
            ],
            swiftSettings: [
                .unsafeFlags(["-strict-concurrency=minimal"])
            ]
        ),
    ]
)
