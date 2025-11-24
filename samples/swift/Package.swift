// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "MagpiePaySample",
    platforms: [
        .macOS(.v10_15)
    ],
    dependencies: [
        .package(path: "../../sdks/MagpiePay")
    ],
    targets: [
        .executableTarget(
            name: "MagpiePaySample",
            dependencies: [
                .product(name: "MagpiePay", package: "MagpiePay")
            ],
            swiftSettings: [
                .unsafeFlags(["-strict-concurrency=minimal"])
            ]
        ),
    ]
)
